type Mods = Record<string, boolean | string>
type Additional = Array<string | undefined>
export function classNames(cls: string, mods: Mods = {}, additional: Additional = []): string {
  return [
    cls,
    ...additional.filter((v) => !!v && v !== 'undefined'),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
