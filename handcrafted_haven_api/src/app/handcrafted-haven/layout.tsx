import Nav from '@/app/ui/hadcrafted-haven/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Nav />
      </div>
      {children}
    </div>
  );
}
