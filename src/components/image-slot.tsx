import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSlotProps = {
  src?: string;
  alt?: string;
  placeholder: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Fills its (positioned, sized) parent. Shows the photo when `src` is set,
 * otherwise a striped placeholder with a caption.
 */
export function ImageSlot({ src, alt, placeholder, className, sizes = "100vw", priority }: ImageSlotProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-haze", className)}>
      {src ? (
        <Image src={src} alt={alt ?? placeholder} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="flex size-full items-center justify-center bg-[repeating-linear-gradient(135deg,transparent_0_14px,rgb(35_31_39/0.05)_14px_15px)] p-6">
          <span className="text-center text-xs tracking-[0.24em] text-mauve uppercase">{placeholder}</span>
        </div>
      )}
    </div>
  );
}
