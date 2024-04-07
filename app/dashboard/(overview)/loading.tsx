import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}

// Concept: loading, whenever loading page is created, it automatically becomes a fallback UI when dynamic data is still loading
// It autmoatically implement streaming, where loaded content will display first

// Concept: Route groups: Place group with folder name with (), it won't change url structure, but will only apply loading in page, not other 
// nested route