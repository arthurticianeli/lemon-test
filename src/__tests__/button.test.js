import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "../Button";

describe("Button primary", () => {
  it("should render button primary", () => {
    render(<Button>Button Primary</Button>);

    const button = screen.getByText("Button Primary");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#026C00" });
  });

  it("should render button primary with arrow icon", () => {
    render(<Button icon="arrow-right">Button Primary</Button>);

    const button = screen.getByText("Button Primary");
    const icon = screen.getByTestId("arrow-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#026C00" });
    expect(icon).toBeTruthy();
  });

  it("should render button primary with check icon", () => {
    render(<Button icon="check">Button Primary</Button>);

    const button = screen.getByText("Button Primary");
    const icon = screen.getByTestId("check-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#026C00" });
    expect(icon).toBeTruthy();
  });

  it("should render button primary with refresh icon", () => {
    render(<Button icon="refresh">Button Primary</Button>);

    const button = screen.getByText("Button Primary");
    const icon = screen.getByTestId("refresh-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#026C00" });
    expect(icon).toBeTruthy();
  });
});

describe("Button secondary", () => {
  it("should render button secondary", () => {
    render(<Button color="secondary">Button Secondary</Button>);

    const button = screen.getByText("Button Secondary");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#F7C346" });
  });

  it("should render button secondary with arrow icon", () => {
    render(
      <Button color="secondary" icon="arrow-right">
        Button Secondary
      </Button>
    );

    const button = screen.getByText("Button Secondary");
    const icon = screen.getByTestId("arrow-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#F7C346" });
    expect(icon).toBeTruthy();
  });

  it("should render button secondary with check icon", () => {
    render(
      <Button color="secondary" icon="check">
        Button Secondary
      </Button>
    );

    const button = screen.getByText("Button Secondary");
    const icon = screen.getByTestId("check-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#F7C346" });
    expect(icon).toBeTruthy();
  });

  it("should render button secondary with refresh icon", () => {
    render(
      <Button color="secondary" icon="refresh">
        Button Secondary
      </Button>
    );

    const button = screen.getByText("Button Secondary");
    const icon = screen.getByTestId("refresh-icon");

    expect(button).toBeTruthy();
    expect(button).toHaveStyleRule({ background: "#F7C346" });
    expect(icon).toBeTruthy();
  });
});

describe("Button disabled", () => {
  it("should render button primary and disabled", () => {
    render(<Button disabled>Button Primary and Disabled</Button>);

    const button = screen.getByText("Button Primary and Disabled");

    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule({ background: "#B7D0B6" });
  });

  it("should render button primary and disabled with icon", () => {
    render(
      <Button disabled icon="refresh">
        Button Primary and Disabled
      </Button>
    );

    const button = screen.getByText("Button Primary and Disabled");
    const icon = screen.getByTestId("refresh-icon");

    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule({ background: "#B7D0B6" });
    expect(icon).toBeTruthy();
  });

  it("should render button secondary and disabled", () => {
    render(
      <Button color="secondary" disabled>
        Button Secondary and Disabled
      </Button>
    );

    const button = screen.getByText("Button Secondary and Disabled");

    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule({ background: "#FFE58D" });
  });

  it("should render button secondary and disabled with icon", () => {
    render(
      <Button color="secondary" disabled icon="refresh">
        Button Secondary and Disabled
      </Button>
    );

    const button = screen.getByText("Button Secondary and Disabled");
    const icon = screen.getByTestId("refresh-icon");

    expect(button).toBeDisabled();
    expect(button).toHaveStyleRule({ background: "#FFE58D" });
    expect(icon).toBeTruthy();
  });
});
