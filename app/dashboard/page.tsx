// Concept: Colocate
// When creating new next.js route, only create new folder under app
// But only content return by page.tsx will be accessible
// Folder without page.tsx under app will not be route

const Page = () => {
  return (
    <div>Dashboard page</div>
  )
}

export default Page