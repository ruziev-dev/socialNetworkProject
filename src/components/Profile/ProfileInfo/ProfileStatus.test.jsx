import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status in props should be in the state", () => {
        const component = create(<ProfileStatus status="айти хуяйти" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("айти хуяйти");
    });

    test("span is not Null", () => {
        const component = create(<ProfileStatus status="айти хуяйти" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });

    test("input is Null", () => {
        const component = create(<ProfileStatus status="айти хуяйти" />);
        const root = component.root;
        let input = root.findByType("input")
        expect(input).toBeNull();
    });

    test("after creation span should be displayed with text", () => {
        const component = create(<ProfileStatus status="айти хуяйти" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.innerText).toBe("айти хуяйти");
    });

});