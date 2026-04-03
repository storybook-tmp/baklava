import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppLayout } from './AppLayout';
import { Link } from '../../components/actions/Link/Link';
import { Icon } from '../../components/graphics/Icon/Icon';
import { Panel } from '../../components/containers/Panel/Panel';
import { FortanixLogo } from '../../fortanix/FortanixLogo/FortanixLogo';
import { UserMenu } from './Header/UserMenu';
import { AccountSelector } from './Header/AccountSelector';
import { SolutionSelector } from './Header/SolutionSelector';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Nav } from './Nav/Nav';
import { Breadcrumbs } from './Breadcrumbs/Breadcrumbs';

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

export const MinimalLayout: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Armor" />
        </Link>
      </AppLayout.Header>
      <AppLayout.Content>
        <Panel>
          <Panel.Heading>Welcome</Panel.Heading>
          <p>Minimal layout with just a header and content area.</p>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const WithBreadcrumbs: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Armor" />
        </Link>
      </AppLayout.Header>
      <AppLayout.Content>
        <Breadcrumbs>
          <Breadcrumbs.Item href="/" label="Home" />
          <Breadcrumbs.Item href="/groups" label="Groups" />
          <Breadcrumbs.Item href="/groups/1" label="Group Details" active />
        </Breadcrumbs>
        <Panel>
          <Panel.Heading>Group Details</Panel.Heading>
          <p>Detailed information about the selected group.</p>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};
