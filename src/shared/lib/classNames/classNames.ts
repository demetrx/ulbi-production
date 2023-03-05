type Mods = Record<string, boolean | string>

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter((v) => v !== 'undefined' && !!v),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
