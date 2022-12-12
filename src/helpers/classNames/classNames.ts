interface classNamesProps {
    mainClass: string;
    mods: Record<string, boolean | string>;
    additional: string[];
}

export const classNames = (mainClass: string, mods: Record<string, boolean | string> = {}, additional: string[] = []) : string=>{
    return [
        mainClass,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
    ].join(' ')
}