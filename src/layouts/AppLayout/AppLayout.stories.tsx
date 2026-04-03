import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
import { Banner } from '../../components/containers/Banner/Banner.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { DialogModal } from '../../components/overlays/DialogModal/DialogModal.tsx';
import { FortanixLogo } from '../../fortanix/FortanixLogo/FortanixLogo.tsx';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs.tsx';
import { Header } from './Header/Header.tsx';
import { AccountSelector } from './Header/AccountSelector.tsx';
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

export const Dashboard: Story = {
  render: () =>
    renderAppShell({
      subtitle: 'Armor',
      selectedAccount: 'north-america',
      selectedSolution: 'armor',
      content: (
        <>
          <Icon icon="accounts" />
          <Breadcrumbs>
            <Breadcrumbs.Item href="/" label="Fortanix Armor" />
            <Breadcrumbs.Item href="/" label="Dashboard" active />
          </Breadcrumbs>
          <Panel>
            <Panel.Heading>Account summary</Panel.Heading>
            <p>Review active policies, outstanding approvals, and recent activity from one place.</p>
          </Panel>
        </>
      ),
      footerText: 'Version: 1.2.2343',
    }),
};

export const OperationsCenter: Story = {
  render: () =>
    renderAppShell({
      subtitle: 'Data Security Manager',
      selectedAccount: 'platform-engineering',
      selectedSolution: 'dsm',
      content: (
        <>
          <Breadcrumbs>
            <Breadcrumbs.Item href="/" label="Fortanix Armor" />
            <Breadcrumbs.Item href="/" label="Operations" />
            <Breadcrumbs.Item href="/" label="Key infrastructure" active />
          </Breadcrumbs>
          <Banner
            compact={false}
            variant="warning"
            title="Certificate rotation due soon"
            actions={<Banner.ActionButton label="Review schedule" kind="secondary" />}
          >
            Two connections will require maintenance in the next 48 hours.
          </Banner>
          <Panel>
            <Panel.Heading>Key infrastructure</Panel.Heading>
            <p>Track HSM capacity, connection status, and pending operator approvals for critical workloads.</p>
          </Panel>
          <Panel>
            <Panel.Heading>Recent approvals</Panel.Heading>
            <p>Five requests are waiting on security owner sign-off before deployment can continue.</p>
          </Panel>
        </>
      ),
      footerText: 'Version: 1.2.2343',
    }),
};

export const WithDialogTrigger: Story = {
  render: () =>
    renderAppShell({
      subtitle: 'Data Security Manager',
      selectedAccount: 'global-platform',
      selectedSolution: 'dsm',
      content: (
        <>
          <Breadcrumbs>
            <Breadcrumbs.Item href="/" label="Fortanix Armor" />
            <Breadcrumbs.Item href="/" label="Managed identities" active />
          </Breadcrumbs>
          <Panel>
            <Panel.Heading>Managed identities</Panel.Heading>
            <DialogModal
              title="Create service identity"
              trigger={({ activate }) => <Button label="Open modal" kind="primary" onPress={activate} />}
            >
              Review the account scope, identity owner, and rollout window before saving this new service identity.
            </DialogModal>
          </Panel>
        </>
      ),
      footerText: 'Version: 1.2.2343',
    }),
};

function renderAppShell(args: {
  subtitle: string;
  selectedAccount: string;
  selectedSolution: string;
  content: ReactNode;
  footerText: string;
}) {
  const { subtitle, selectedAccount, selectedSolution, content, footerText } = args;

  return (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle={subtitle} subtitleTrademark />
        </Link>
        <Header slot="actions">
          <UserMenu userName="Anand Kashyap">{renderUserMenuItems()}</UserMenu>
          <AccountSelector className="select-action" accounts={renderAccountOptions()} selected={selectedAccount}>
            {selectedAccountOption => selectedAccountOption?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector className="select-action" solutions={renderSolutionOptions()} selected={selectedSolution} />
        </Header>
      </AppLayout.Header>
      <AppLayout.Sidebar>
        <Sidebar className="bk-app-layout__sidebar">
          <Nav>
            <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
            <Nav.NavItem icon="projects" label="Projects" href="#" />
            <Nav.NavItem icon="policy" label="Policies" href="#" />
            <Nav.NavItem icon="activity" label="Activity" href="#" />
          </Nav>
        </Sidebar>
      </AppLayout.Sidebar>
      <AppLayout.Content>{content}</AppLayout.Content>
      <AppLayout.Footer>
        <span className="version">{footerText}</span>
      </AppLayout.Footer>
    </AppLayout>
  );
}

function renderUserMenuItems() {
  return (
    <>
      <UserMenu.Action itemKey="profile" label="Profile" />
      <UserMenu.Action itemKey="notifications" label="Notifications" />
      <UserMenu.Action itemKey="logout" label="Log out" />
    </>
  );
}

function renderAccountOptions() {
  return (
    <>
      <AccountSelector.Header>Recent accounts</AccountSelector.Header>
      <AccountSelector.Option itemKey="north-america" label="North America Platform" />
      <AccountSelector.Option itemKey="platform-engineering" label="Platform Engineering" />
      <AccountSelector.Option itemKey="global-platform" label="Global Platform" />
      <AccountSelector.FooterActions>
        <AccountSelector.Action itemKey="manage-accounts" label="Manage accounts" />
      </AccountSelector.FooterActions>
    </>
  );
}

function renderSolutionOptions() {
  return (
    <>
      <SolutionSelector.Option itemKey="armor" label="Armor" />
      <SolutionSelector.Option itemKey="dsm" label="Data Security Manager" />
      <SolutionSelector.Option itemKey="ki" label="Key Insight" />
    </>
  );
}
