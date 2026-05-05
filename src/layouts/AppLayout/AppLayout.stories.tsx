import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';

import { Link } from '../../components/actions/Link/Link.tsx';
import { Icon } from '../../components/graphics/Icon/Icon.tsx';
import { Panel } from '../../components/containers/Panel/Panel.tsx';
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

const accounts = (
  <>
    <AccountSelector.Option itemKey="prod" label="Production" />
    <AccountSelector.Option itemKey="staging" label="Staging" />
  </>
);

const solutions = (
  <>
    <SolutionSelector.Option itemKey="dsm" label="Data Security Manager" />
    <SolutionSelector.Option itemKey="armor" label="Armor" />
  </>
);

const userActions = (
  <>
    <UserMenu.Action label="Profile" />
    <UserMenu.Action label="Sign out" />
  </>
);

const DemoShell = ({
  activeNav = 'Dashboard',
  footer = 'Version: 1.2.2343',
}: {
  activeNav?: string;
  footer?: string;
}) => (
  <AppLayout style={{ minHeight: '100vh' }}>
    <AppLayout.Header>
      <Link unstyled href="#" slot="logo">
        <FortanixLogo subtitle="Armor" />
      </Link>
      <Header slot="actions">
        <UserMenu userName="Anand Kashyap">{userActions}</UserMenu>
        <AccountSelector className="select-action" accounts={accounts} selected="prod">
          {(accountSelected) => accountSelected?.label ?? 'Accounts'}
        </AccountSelector>
        <SolutionSelector className="select-action" solutions={solutions} selected="armor">
          {(solutionSelected) => solutionSelected?.label ?? 'Solutions'}
        </SolutionSelector>
      </Header>
    </AppLayout.Header>
    <AppLayout.Sidebar>
      <Sidebar className="bk-app-layout__sidebar">
        <Nav>
          <Nav.NavItem active={activeNav === 'Dashboard'} icon="dashboard" label="Dashboard" href="#" />
          <Nav.NavItem active={activeNav === 'Groups'} icon="group" label="Groups" href="#" />
        </Nav>
      </Sidebar>
    </AppLayout.Sidebar>
    <AppLayout.Content>
      <Icon icon="accounts" />
      <Breadcrumbs>
        <Breadcrumbs.Item href="/" label="Fortanix Armor" />
        <Breadcrumbs.Item href="/" label={activeNav} active />
      </Breadcrumbs>
      <Panel>
        <Panel.Heading>{activeNav}</Panel.Heading>
        <p>Primary content area</p>
      </Panel>
    </AppLayout.Content>
    <AppLayout.Footer>
      <span className="version">{footer}</span>
    </AppLayout.Footer>
  </AppLayout>
);

export const Default: Story = {
  render: () => <DemoShell />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('main')).toBeVisible();
    await expect(canvas.getByText('Version: 1.2.2343')).toBeVisible();
  },
};

export const GroupsPage: Story = {
  render: () => <DemoShell activeNav="Groups" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('heading', { name: 'Groups' })).toBeVisible();
    await expect(canvas.getAllByRole('listitem', { current: 'page' }).at(-1)).toHaveTextContent('Groups');
  },
};

export const HeaderSelections: Story = {
  render: () => <DemoShell footer="Version: 2.0.0-beta" />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: /anand kashyap/i })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'prod' })).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'armor' })).toBeVisible();
    await expect(canvas.getByText('Version: 2.0.0-beta')).toBeVisible();
  },
};
