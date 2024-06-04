import { mountSuspended } from "@nuxt/test-utils/runtime";
import { expect, it, describe } from "vitest";
import AppHeader from "@/components/AppHeader.vue";

describe("- AppHeader Component", () => {
  it("renders the AppHeader component with the correct title", async () => {
    const title = "THE DEFASAFE CAT FACTS PAGE";
    const wrapper = await mountSuspended(AppHeader, {
      props: {
        title
      }
    });

    expect(wrapper.text()).toContain(title);
  });
});
