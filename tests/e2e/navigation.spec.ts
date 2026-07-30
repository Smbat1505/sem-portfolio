import { expect, test } from "@playwright/test";
test("portfolio navigation and core interactions work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Production-grade interfaces/i })).toBeVisible();
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Selected product work" })).toBeVisible();
  await page.getByRole("button", { name: "Automation" }).click();
  await expect(page.getByRole("heading", { name: "Automation Tool" })).toBeVisible();
  await page.getByRole("link", { name: /Automation Tool/i }).click();
  await expect(page).toHaveURL(/\/projects\/automation-tool$/);
  await expect(page.getByRole("heading", { name: "Automation Tool" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technical decisions" })).toBeVisible();
  await page.getByRole("link", { name: /Back to projects/i }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("link", { name: "Capabilities", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Capabilities", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Core capabilities work as one system" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Testing & CI" }).first()).toBeVisible();
  await page.getByRole("link", { name: "Resume", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Resume", exact: true })).toBeVisible();
  await expect(page.getByText("PDF in V1.1")).toBeVisible();
  await page.getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page.getByRole("heading", { name: /Let.s build something useful/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Email/i }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /View resume/i }).first()).toBeVisible();

  await page.goto("/ru");
  await expect(page.getByRole("link", { name: "Проекты", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Проекты", exact: true }).click();
  await page.getByRole("link", { name: /Social Platform/i }).click();
  await expect(page).toHaveURL(/\/ru\/projects\/social-platform$/);
  await expect(page.getByRole("heading", { name: "Технические решения" })).toBeVisible();
  await page.getByRole("link", { name: /Назад к проектам/i }).click();
  await page.getByRole("link", { name: "Навыки", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/capabilities$/);
  await page.getByRole("link", { name: "Резюме", exact: true }).click();
  await expect(page).toHaveURL(/\/ru\/resume$/);
  await expect(page.getByRole("heading", { name: "Резюме", exact: true })).toBeVisible();
  await expect(
    page.getByText("React- и TypeScript-интерфейсы, командная практика, продуктовое мышление и дисциплина delivery."),
  ).toBeVisible();
  await page.getByRole("link", { name: "EN", exact: true }).click();
  await expect(page).toHaveURL(/\/resume$/);
});

test("mobile menu, locale, and theme controls are touch-friendly and persistent", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Open menu" });
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");

  await menuButton.click();
  await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects", exact: true })).toBeVisible();
  await expect(page.getByRole("group", { name: "Language" })).toBeVisible();

  const lightTheme = page.getByRole("radio", { name: "Light" });
  await expect(lightTheme).toBeVisible();
  await lightTheme.click();
  await expect(lightTheme).toHaveAttribute("aria-checked", "true");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.getByRole("button", { name: "Open menu" }).click();
  await page.getByRole("link", { name: "RU", exact: true }).click();
  await expect(page).toHaveURL(/\/ru$/);
  await expect(page.getByRole("dialog", { name: "Мобильная навигация" })).toHaveCount(0);
});
