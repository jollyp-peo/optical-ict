export function createBreadcrumbs(
  items = []
) {
  return items.map(
    (item, index) => ({
      position: index + 1,
      name: item.name,
      href: item.href,
    })
  );
}