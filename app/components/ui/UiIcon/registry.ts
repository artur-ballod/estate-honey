const iconModules = import.meta.glob("@/assets/icons/*.svg", {
  eager: true,
  import: "default",
});

export const uiIconsRegistry = Object.fromEntries(
  Object.entries(iconModules).map(([path, component]) => {
    const fileName = path.split("/").pop()?.replace(".svg", "") ?? "";

    return [fileName, component];
  }),
);