import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../../components/actions/Button/Button.tsx';
import { Link } from '../../components/actions/Link/Link.tsx';
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
            {accountSelected => accountSelected?.label ?? 'Accounts'}
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

export const WithModalTrigger: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Header>
        <Link unstyled href="#" slot="logo">
          <FortanixLogo subtitle="Data Security Manager" subtitleTrademark={true} />
        </Link>
        <Header slot="actions">
          <UserMenu userName="Anand Kashyap" />
          <AccountSelector className="select-action" accounts={null}>
            {selectedAccount => selectedAccount === null ? 'Accounts' : selectedAccount.label}
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
          <DialogModal
            title="Modal"
            trigger={({ activate }) => <Button label="Open modal" onPress={activate} />}
          >
            Test
          </DialogModal>
        </Panel>
      </AppLayout.Content>
      <AppLayout.Footer>
        <span className="version">Version: 1.2.2343</span>
      </AppLayout.Footer>
    </AppLayout>
  ),
};
