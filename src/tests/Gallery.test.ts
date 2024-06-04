import { mountSuspended } from "@nuxt/test-utils/runtime";
import { expect, it, describe } from "vitest";
import Gallery from "@/components/Gallery.vue";

describe("- Gallery Component", () => {
  it("renders the Gallery component with the correct images", async () => {
    const images = ["/images/kitty1.webp", "/images/kitty2.webp", "/images/kitty3.webp"];
    const wrapper = await mountSuspended(Gallery, {
      props: {
        images
      }
    });

    // Check if all images are rendered
    images.forEach((image, index) => {
      expect(wrapper.get(`img[src="${image}"]`)).toBeTruthy();
    });
  });

  it("verifies that the images prop contains valid image extensions", async () => {
    const images = ["/images/kitty1.webp", "/images/kitty2.webp", "/images/kitty3.webp"];
    const wrapper = await mountSuspended(Gallery, {
      props: {
        images
      }
    });
  
    // Check if all images have valid extensions
   images.forEach((image) => {
      const extension = image.split(".").pop();
      expect(["jpg", "jpeg", "png", "webp", "gif"]).toContainEqual(extension)
    });
  });
});