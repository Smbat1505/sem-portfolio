import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { getLocalizedContent } from "@/src/shared/i18n";
import { HomeSkillGraph } from "./home-skill-graph";

describe("HomeSkillGraph", () => {
  it("hands the rotating corona focus to the selected skill and its parent", async () => {
    const user = userEvent.setup();
    const capabilities = getLocalizedContent("en").capabilities;

    const { container } = render(<HomeSkillGraph capabilities={capabilities} locale="en" />);

    expect(container.querySelectorAll('[data-active="true"]')).toHaveLength(0);
    expect(container.querySelector('[data-idle="true"]')).not.toHaveAttribute("data-primary-target");
    expect(container.querySelectorAll("[data-detail-panel]")).toHaveLength(9);
    expect(container.querySelectorAll('[data-domain-orbit-for="product-delivery"]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-domain-orbit-for="frontend-architecture"]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-domain-orbit-for="testing-ci"]')).toHaveLength(1);
    expect(container.querySelectorAll('[data-satellite-active="true"]')).toHaveLength(0);
    expect(container.querySelector('[data-detail-panel="idle"]')).toHaveAttribute("aria-hidden", "false");
    expect(screen.getByRole("heading", { name: "Choose a capability" })).toBeInTheDocument();
    expect(
      screen.getAllByRole("button").filter((button) => button.getAttribute("aria-pressed") === "true"),
    ).toHaveLength(0);

    await user.hover(screen.getByRole("button", { name: "UI Engineering" }));

    expect(container.querySelectorAll('[data-solar-ray="true"]')).toHaveLength(32);
    expect(container.querySelector('[data-primary-target="ui-engineering"]')).toHaveAttribute(
      "data-secondary-target",
      "product-delivery",
    );
    expect(container.querySelector('[data-orbit-for="ui-engineering"]')).toHaveAttribute("data-active", "true");
    expect(container.querySelector('[data-orbit-for="accessibility"]')).toHaveAttribute("data-active", "false");
    expect(container.querySelector('[data-satellite-orbit-for="ui-engineering"]')).toHaveAttribute(
      "data-satellite-active",
      "true",
    );
    expect(container.querySelector('[data-satellite-orbit-for="accessibility"]')).toHaveAttribute(
      "data-satellite-active",
      "false",
    );
    expect(container.querySelector('[data-detail-panel="idle"]')).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelector('[data-detail-panel="ui-engineering"]')).toHaveAttribute("aria-hidden", "false");
    expect(
      screen
        .getAllByRole("button", { name: "UI Engineering" })
        .every((button) => button.getAttribute("aria-pressed") === "true"),
    ).toBe(true);
  });
});
