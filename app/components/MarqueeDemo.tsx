'use client';

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
  className="flex min-w-full gap-4"
  style={{
    transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 4 : 0}px)`,
    animationName: `scroll-${direction}`,
    animationDuration: `${contentWidth / speed}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: isPaused ? "paused" : "running",
  }}
>

        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

interface ReviewCardProps {
  avatar: string;
  name: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ avatar, name, rating, review }: ReviewCardProps) => (
  <div className="w-64 sm:w-80 p-4 sm:p-5 bg-neutral-900 rounded-2xl border border-neutral-700 shadow-md text-neutral-100 text-sm sm:text-base">
    <div className="flex items-center gap-2 sm:gap-3 mb-3">
      <img
        src={avatar}
        alt={name}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-base sm:text-lg">{name}</h3>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-neutral-500"}`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-neutral-400 text-xs sm:text-sm">{review}</p>
  </div>
);

export default function MarqueeDemo() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review: "This gym is amazing! The trainers are very motivating and the facilities are top-notch.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review: "Great atmosphere, clean equipment, and awesome energy. Love my workouts here!",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review: "FlexPulse Gym helped me stay consistent with my fitness goals. Highly recommended!",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review: "Very well-equipped gym with a great vibe. Classes are fun and effective.",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-4xl font-bold text-yellow-500 text-center mb-8 sm:mb-10">
        What Our Members Say
      </h2>
      <Marquee direction="left" speed={25} className="py-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            avatar={review.avatar}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </Marquee>
    </section>
  );
}
