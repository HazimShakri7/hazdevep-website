"use client";
import React from "react";
import { RadioGroup, useRadio, VisuallyHidden, RadioProps, cn } from "@heroui/react";

export const CustomRadio = (props: RadioProps) => {
  const {
    Component,
    children,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getControlProps,
    isSelected, // Added to check if the radio is selected
  } = useRadio(props);

  return (
    <div className="relative group">
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center justify-between", // Changed to justify-between for better spacing
        "cursor-pointer border-2 rounded-lg p-4 w-[170px]",
        "data-[selected=true]:border-primary",
        isSelected && "border-2 border-yellow-400" // Added background for selected state
      )}
      aria-labelledby={children ? children.toString() : undefined} // Accessibility: Ensure label is associated with input
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()} className="flex-1">
        {children && <span {...getLabelProps()}>{children}</span>}
      </span>
      <span
        {...getControlProps()}
        className={cn(
          "w-4 h-4 border-2 rounded-full transition-all duration-200", // Small circle
          isSelected
            ? "bg-yellow-400" : "border-gray-300" // When not selected, show empty circle
        )}
      />
    </Component>
    {description && (
      <div
        className={cn(
          "absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 text-xs text-white bg-green-900 border-2 border-white rounded-lg",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default function Budget() {
  return (
    <h1 className="max-w-6xl mx-auto">
      <div className="text-left ml-4 sm:ml-6 lg:ml-4">
        <span className="text-xl sm:text-2xl font-bold text-white">
          Budget
        </span>
        <RadioGroup label="" name="type-group"> {/* Added name for radio group accessibility */}
          <div className="flex flex-wrap justify-start space-x-4 sm:space-x-6 lg:space-x-4 gap-y-4 mt-2">
            <CustomRadio description="Simple and basic design." value="first">
              RM 50.00 ++
            </CustomRadio>
            <CustomRadio description="Perfect for small businesses!" value="second">
              RM 100.00 ++
            </CustomRadio>
            <CustomRadio description="Anything as per request." value="third">
              RM 300.00 ++
            </CustomRadio>
          </div>
        </RadioGroup>
      </div>
    </h1>
  );
}
