import * as React from "react"

// To avoid heavy radx-ui dependencies, using native select internally
// with custom styled wrapper.

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ children, className, ...props }, ref) => {
  return (
    <div className={`relative ${className}`}>
      <select 
        ref={ref}
        className="flex h-10 w-full appearance-none items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        {...props}
      >
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </div>
    </div>
  )
})
Select.displayName = "Select"

export const SelectTrigger = ({ children }: { children?: React.ReactNode; className?: string }) => <>{children}</>
export const SelectValue = ({ placeholder }: { placeholder?: string }) => <option value="" disabled>{placeholder}</option>
export const SelectContent = ({ children }: { children?: React.ReactNode }) => <>{children}</>
export const SelectItem = ({ value, children }: { value: string; children?: React.ReactNode }) => <option value={value}>{children}</option>
