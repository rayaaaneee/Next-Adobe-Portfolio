
const imageBaseClassName = `h-24 w-24`;

const baseProps = {
    width: 96,
    height: 96,
};

export const baseImageProps = {
    ...baseProps,
    className: imageBaseClassName,
    alt: 'Image',
} as const;

const iconBaseClassName = `text-white ${imageBaseClassName}`;

export const baseIconProps = {
    ...baseProps,
    className: iconBaseClassName,
} as const;