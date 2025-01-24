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
        {description && (
          <span className="text-small text-foreground opacity-70">{description}</span>
        )}
      </span>
      <span
        {...getControlProps()}
        className={cn(
          "w-4 h-4 border-2 rounded-full transition-all duration-200", // Small circle
          isSelected
            ? "bg-yellow-400" // When selected, show filled circle
            : "border-gray-300" // When not selected, show empty circle
        )}
      />
    </Component>
  );
};

export default function Types() {
  return (
    <h1 className="max-w-6xl mx-auto">
      <div className="text-left ml-4 sm:ml-6 lg:ml-4">
        <span className="text-xl sm:text-2xl font-bold text-white">
          Types
        </span>
        <RadioGroup label="" name="type-group"> {/* Added name for radio group accessibility */}
          <div className="flex flex-wrap justify-start space-x-4 sm:space-x-6 lg:space-x-4 gap-y-4 mt-2">
            <CustomRadio description="" value="portfolio">
              Portfolio
            </CustomRadio>
            <CustomRadio description="" value="branding">
              Branding
            </CustomRadio>
            <CustomRadio description="" value="blogging">
              Blogging
            </CustomRadio>
            <CustomRadio description="" value="ecommerce">
              E-Commerce
            </CustomRadio>
            <CustomRadio description="" value="others">
              Others
            </CustomRadio>
          </div>
        </RadioGroup>
      </div>
    </h1>
  );
}
