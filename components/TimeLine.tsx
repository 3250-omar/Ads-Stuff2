"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import clsx from "clsx";

type TimelineItem = {
  title: string;
  date: string;
  subtitle?: string;
  description?: string;
  status?: string;
};

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative   py-10">
      {/* continuous center line */}
      <Separator
        orientation="vertical"
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-primary max-sm:hidden"
      />

      <div className="relative z-10 space-y-10 ">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={clsx(
                "relative flex items-start",
                isLeft ? "justify-start" : "justify-end",
                "max-md:justify-center"
              )}
            >
              {/* timeline dot */}
              <span className="absolute left-1/2 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-background max-sm:hidden">
                <span className="block h-3 w-3 rounded-full bg-secondary" />
              </span>

              {/* timeline card */}
              <div
                className={clsx(
                  "w-[calc(50%-1rem)] max-md:w-[calc(100%-2.5rem)] max-sm:w-[calc(100%-1.5rem)]",
                  isLeft
                    ? "text-right pr-4 max-md:pr-0"
                    : "text-left pl-4 max-md:pl-0"
                )}
              >
                <Card className="shadow-lg hover:shadow-xl transition-all border-border group ">
                  <CardContent className="px-6 py-6">
                    <div
                      className={clsx(
                        "flex items-center justify-between mb-3 gap-2",
                        isLeft && "flex-row-reverse"
                      )}
                    >
                      <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <Badge variant="secondary">{item.date}</Badge>
                    </div>

                    {item.subtitle && (
                      <p
                        className={clsx(
                          "text-sm text-muted-foreground mb-2",
                          isLeft && "text-right"
                        )}
                      >
                        {item.subtitle}
                      </p>
                    )}

                    {item.description && (
                      <p
                        className={clsx(
                          "text-base leading-relaxed text-muted-foreground",
                          isLeft && "text-right"
                        )}
                      >
                        {item.description}
                      </p>
                    )}

                    {item.status && (
                      <div
                        className={clsx(
                          "mt-4 border-t  pt-3",
                          isLeft && "flex justify-end"
                        )}
                      >
                        <Badge
                          variant="outline"
                          className="group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          {item.status}
                        </Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
