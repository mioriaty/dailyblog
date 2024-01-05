import NavLinks from '@/app/dashboard/components/nav-links';
import { PropsWithChildren } from 'react';

function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="dashboard-layout space-y-5">
      <NavLinks />
      {children}
    </div>
  );
}

export default DashboardLayout;
