import { render, screen } from "@testing-library/react";
import { ProfileImage } from "./ProfileImage";

test("the profile image contains the correct alt tag", () => {
  render(<ProfileImage />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("alt", "Profile");
});

test("the profile image contains the correct source image", () => {
  render(<ProfileImage />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("src", "profileImage.png");
});
