import { expect, test } from "@playwright/test";
test("portfolio navigation and core interactions work", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Production-grade interfaces/i })).toBeVisible();
  await page.getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Selected product work" })).toBeVisible();
  await page.getByRole("button", { name: "Automation" }).click();
  await expect(page.getByRole("heading", { name: "Automation Tool" })).toBeVisible();
  await page.getByRole("link", { name: /Automation Tool/i }).click();
  await expect(page).toHaveURL(/\/en\/projects\/automation-tool$/);
  await expect(page.getByRole("heading", { name: "Automation Tool" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technical decisions" })).toBeVisible();
  await page.getByRole("link", { name: /Back to projects/i }).click();
  await expect(page).toHaveURL(/\/en\/projects$/);
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
  await expect(page).toHaveURL(/\/en\/resume$/);
});
