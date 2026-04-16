import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { DialogModal } from '../../components/overlays/DialogModal/DialogModal.tsx';
import { FortanixLogo } from '../../fortanix/FortanixLogo/FortanixLogo.tsx';

import { AppLayout } from './AppLayout.tsx';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs.tsx';
import { Header } from './Header/Header.tsx';
import { AccountSelector } from './Header/AccountSelector.tsx';
import { SolutionSelector } from './Header/SolutionSelector.tsx';
import { UserMenu } from './Header/UserMenu.tsx';
import { Nav } from './Nav/Nav.tsx';
import { Sidebar } from './Sidebar/Sidebar.tsx';

const meta = {
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const noop = () => undefined;

const accountItems = (
  <>
    <AccountSelector.Header itemKey="recent-accounts" label="Recent accounts" />
    <AccountSelector.Option itemKey="project-atlas" label="Project Atlas" />
    <AccountSelector.Option itemKey="project-borealis" label="Project Borealis" />
    <AccountSelector.Option itemKey="project-solstice" label="Project Solstice" />
    <AccountSelector.FooterActions>
      <AccountSelector.Action itemKey="manage-accounts" label="Manage accounts" onActivate={noop} />
    </AccountSelector.FooterActions>
  </>
);

const solutionItems = (
  <>
    <SolutionSelector.Header itemKey="available-solutions" label="Available solutions" />
    <SolutionSelector.Option itemKey="armor" label="Armor" />
    <SolutionSelector.Option itemKey="dsm" label="Data Security Manager" />
    <SolutionSelector.Option itemKey="iam" label="Identity and Access Management" />
  </>
);

type AppShellProps = {
  userName: string;
  selectedAccount?: string;
  selectedSolution?: string;
  modalInitiallyOpen?: boolean;
};

const AppShell = ({
  userName,
  selectedAccount,
  selectedSolution,
  modalInitiallyOpen = false,
}: AppShellProps) => (
  <AppLayout>
    <AppLayout.Header>
      <Link unstyled href="#" slot="logo">
        <FortanixLogo subtitle="Data Security Manager" subtitleTrademark />
      </Link>
      <Header slot="actions">
        <UserMenu userName={userName}>
          <UserMenu.Action itemKey="profile" label="Profile" onActivate={noop} />
          <UserMenu.Action itemKey="sign-out" label="Sign out" onActivate={noop} />
        </UserMenu>
        <AccountSelector className="select-action" accounts={accountItems} selected={selectedAccount}>
          {currentAccount => currentAccount?.label ?? 'Accounts'}
        </AccountSelector>
        <SolutionSelector className="select-action" solutions={solutionItems} selected={selectedSolution}>
          {currentSolution => currentSolution?.label ?? 'Solutions'}
        </SolutionSelector>
      </Header>
    </AppLayout.Header>
    <AppLayout.Sidebar>
      <Sidebar className="bk-app-layout__sidebar">
        <Nav>
          <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
          <Nav.NavItem icon="projects" label="Projects" href="#" />
          <Nav.NavItem icon="policy" label="Policies" href="#" />
          <Nav.NavItem icon="audit-log" label="Audit log" href="#" />
        </Nav>
      </Sidebar>
    </AppLayout.Sidebar>
    <AppLayout.Content>
      <Icon icon="accounts" />

      <Breadcrumbs>
        <Breadcrumbs.Item href="/" label="Fortanix Armor" />
        <Breadcrumbs.Item href="/" label="Project Atlas" />
        <Breadcrumbs.Item href="/" label="Security dashboard" active />
      </Breadcrumbs>

      <Panel>
        <Panel.Heading>Deployment overview</Panel.Heading>
        <p>
          Review the current rollout status, confirm the selected workspace, and inspect any changes before you publish
          updates to production.
        </p>
        <DialogModal
          activeDefault={modalInitiallyOpen}
          title="Rotate API key"
          size="small"
          actions={<DialogModal.SubmitAction label="Rotate key" />}
          trigger={({ activate }) => <Button label="Rotate API key" onPress={activate} />}
        >
          Rotating the active key creates a new credential immediately and invalidates the previous one after the
          configured grace period.
        </DialogModal>
      </Panel>
    </AppLayout.Content>
    <AppLayout.Footer>
      <span className="version">Version: 1.0.0-beta-20260330</span>
    </AppLayout.Footer>
  </AppLayout>
);

export const Dashboard: Story = {
  render: () => <AppShell userName="Anand Kashyap" />,
};

export const SelectedWorkspace: Story = {
  render: () => (
    <AppShell
      userName="Anand Kashyap - Security Operations"
      selectedAccount="project-atlas"
      selectedSolution="dsm"
    />
  ),
};

export const WithOpenModal: Story = {
  render: () => <AppShell userName="Anand Kashyap" modalInitiallyOpen />,
};
