import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, waitFor } from 'storybook/test';

import { Link } from '../../components/actions/Link/Link.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { FortanixLogo } from '../../fortanix/FortanixLogo/FortanixLogo.tsx';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs.tsx';
import { AccountSelector } from './Header/AccountSelector.tsx';
import { Header } from './Header/Header.tsx';
import { SolutionSelector } from './Header/SolutionSelector.tsx';
import { UserMenu } from './Header/UserMenu.tsx';
import { Nav } from './Nav/Nav.tsx';
import { Sidebar } from './Sidebar/Sidebar.tsx';
import { AppLayout } from './AppLayout.tsx';


const meta = {
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardShell: Story = {
  render: () => <DashboardLayout />,
  play: async ({ canvas }) => {
    const dashboardLink = canvas.getByRole('link', { name: 'Dashboard' });
    
    await expect(canvas.getByText('Fortanix')).toBeVisible();
    await expect(dashboardLink).toBeVisible();
    await expect(dashboardLink.closest('li')).toHaveAttribute('aria-current', 'page');
    await expect(canvas.getByRole('navigation', { name: 'Breadcrumbs' })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: 'Security posture' })).toBeVisible();
  },
};

export const AccountSelectorMenu: Story = {
  render: () => <DashboardLayout />,
  play: async ({ canvas, userEvent }) => {
    const accountSelector = canvas.getByRole('button', { name: /Production account/i });
    
    await userEvent.click(accountSelector);
    await expect(canvas.getByRole('option', { name: 'Staging account' })).toBeVisible();
    
    await userEvent.click(canvas.getByRole('option', { name: 'Staging account' }));
    await waitFor(async () => {
      await expect(accountSelector).toHaveTextContent('Staging account');
    });
  },
};

export const UserMenuActions: Story = {
  render: () => <DashboardLayout />,
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /Anand Kashyap/i }));
    
    await expect(canvas.getByRole('button', { name: 'Profile' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Sign out' })).toBeVisible();
  },
};

function DashboardLayout() {
  const [selectedAccount, setSelectedAccount] = React.useState<null | string>('production');
  
  return (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Armor" />
        </Link>
        <Header slot="actions">
          <UserMenu userName="Anand Kashyap">
            <UserMenu.Action itemKey="profile" label="Profile" icon="user" onActivate={() => {}} />
            <UserMenu.Action itemKey="sign-out" label="Sign out" icon="logout" onActivate={() => {}} />
          </UserMenu>
          <AccountSelector
            className="select-action"
            accounts={
              <>
                <AccountSelector.Option itemKey="production" label="Production account" icon="account" />
                <AccountSelector.Option itemKey="staging" label="Staging account" icon="account" />
              </>
            }
            selected={selectedAccount}
            onSelect={accountSelected => { setSelectedAccount(accountSelected); }}
            formatItemLabel={itemKey => ({
              production: 'Production account',
              staging: 'Staging account',
            })[itemKey] ?? itemKey}
          >
            {accountSelected => accountSelected?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector
            className="select-action"
            solutions={
              <>
                <SolutionSelector.Option itemKey="dsm" label="Data Security Manager" icon="security-dashboard" />
                <SolutionSelector.Option itemKey="iam" label="Identity and Access" icon="user-authentication" />
              </>
            }
          />
        </Header>
      </AppLayout.Header>
      <AppLayout.Sidebar>
        <Sidebar className="bk-app-layout__sidebar">
          <Nav>
            <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
            <Nav.NavItem icon="accounts" label="Accounts" href="#" />
            <Nav.NavItem icon="policy" label="Policies" href="#" />
          </Nav>
        </Sidebar>
      </AppLayout.Sidebar>
      <AppLayout.Content>
        <Icon icon="security-dashboard" />
        <Breadcrumbs>
          <Breadcrumbs.Item href="/" label="Fortanix Armor" />
          <Breadcrumbs.Item href="/" label="Dashboard" active />
        </Breadcrumbs>
        <Panel>
          <Panel.Heading>Security posture</Panel.Heading>
          <p>All production accounts are connected and reporting activity.</p>
        </Panel>
      </AppLayout.Content>
      <AppLayout.Footer>
        <span className="version">Version: 1.2.2343</span>
      </AppLayout.Footer>
    </AppLayout>
  );
}
