import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLayout } from './AppLayout.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
import { FortanixLogo } from '../../fortanix/FortanixLogo/FortanixLogo.tsx';
import { UserMenu } from './Header/UserMenu.tsx';
import { AccountSelector } from './Header/AccountSelector.tsx';
import { SolutionSelector } from './Header/SolutionSelector.tsx';
import { Header } from './Header/Header.tsx';
import { Sidebar } from './Sidebar/Sidebar.tsx';
import { Nav } from './Nav/Nav.tsx';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs.tsx';

const meta = {
  component: AppLayout,
} satisfies Meta<typeof AppLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Armor" />
        </Link>
        <Header slot="actions">
          <UserMenu userName="Anand Kashyap" />
          <AccountSelector className="select-action" accounts={null}>
            {(accountSelected) => accountSelected?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector className="select-action" solutions={null} />
        </Header>
      </AppLayout.Header>
      <AppLayout.Sidebar>
        <Sidebar className="bk-app-layout__sidebar">
          <Nav>
            <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
            <Nav.NavItem icon="dashboard" label="Groups" href="#" />
          </Nav>
        </Sidebar>
      </AppLayout.Sidebar>
      <AppLayout.Content>
        <Icon icon="accounts" />
        <Breadcrumbs>
          <Breadcrumbs.Item href="/" label="Fortanix Armor" />
          <Breadcrumbs.Item href="/" label="Dashboard" active />
        </Breadcrumbs>
        <Panel>
          <Panel.Heading>Panel</Panel.Heading>
        </Panel>
      </AppLayout.Content>
      <AppLayout.Footer>
        <span className="version">Version: 1.2.2343</span>
      </AppLayout.Footer>
    </AppLayout>
  ),
};

export const Minimal: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo />
        </Link>
      </AppLayout.Header>
      <AppLayout.Content>
        <Panel>
          <Panel.Heading>Main Content</Panel.Heading>
          <p>Welcome to the application.</p>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const WithSidebar: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Armor" />
        </Link>
      </AppLayout.Header>
      <AppLayout.Sidebar>
        <Sidebar>
          <Nav>
            <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
            <Nav.NavItem icon="dashboard" label="Groups" href="#" />
            <Nav.NavItem icon="dashboard" label="Settings" href="#" />
          </Nav>
        </Sidebar>
      </AppLayout.Sidebar>
      <AppLayout.Content>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/" label="Home" />
          <Breadcrumbs.Item href="/" label="Dashboard" active />
        </Breadcrumbs>
        <Panel>
          <Panel.Heading>Dashboard</Panel.Heading>
          <p>Welcome to the dashboard.</p>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};
