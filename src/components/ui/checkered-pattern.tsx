import { cn } from "@/lib/utils"

interface CheckeredPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  opacity?: number
  className?: string
}

export function CheckeredPattern({
  size = 32,
  opacity = 0.15,
  className,
  ...props
}: CheckeredPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `
          linear-gradient(45deg, rgba(0, 0, 0, ${opacity}) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(0, 0, 0, ${opacity}) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, ${opacity}) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, ${opacity}) 75%)
        `,
        backgroundSize: `${size}px ${size}px`,
        backgroundPosition: `0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px`,
      }}
      {...props}
    >
      <div 
        className="absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 0, 0, ${opacity}) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(0, 0, 0, ${opacity}) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, ${opacity}) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, ${opacity}) 75%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px`,
        }}
      />
      <div 
        className="hidden dark:block absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(255, 255, 255, ${opacity * 0.5}) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 255, 255, ${opacity * 0.5}) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, ${opacity * 0.5}) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, ${opacity * 0.5}) 75%)
          `,
          backgroundSize: `${size}px ${size}px`,
          backgroundPosition: `0 0, 0 ${size / 2}px, ${size / 2}px -${size / 2}px, -${size / 2}px 0px`,
        }}
      />
    </div>
  )
}

