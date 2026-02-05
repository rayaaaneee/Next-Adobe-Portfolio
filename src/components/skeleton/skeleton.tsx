import cn from "@/util/function/cn";

interface SkeletonProps {
    className?: string;
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
}

const Skeleton = ({
    className,
    variant = 'rectangular',
    width,
    height,
}: SkeletonProps) => {

    const variantStyles = {
        text: 'rounded',
        circular: 'rounded-full',
        rectangular: 'rounded-md'
    };

    return (
        <div
            className={cn(
                "animate-shimmer bg-gradient-to-r bg-[length:200%_100%]",
                "from-gray-200 via-gray-300/70 to-gray-200",
                "dark:from-gray-700 dark:via-gray-600/70 dark:to-gray-700",
                variantStyles[variant],
                className
            )}
            style={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: typeof height === 'number' ? `${height}px` : height,
            }}
        />
    );
};

export const SkeletonText = ({ lines = 3, className }: { lines?: number; className?: string }) => (
    <div className={cn('space-y-3', className)}>
        {Array.from({ length: lines }).map((_, i) => (
            <Skeleton
                key={i}
                variant="text"
                height={14}
                width={i === lines - 1 ? '75%' : '100%'}
            />
        ))}
    </div>
);

export default Skeleton;
