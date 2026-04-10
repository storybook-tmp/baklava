import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Link } from '../../components/actions/Link/Link.tsx';
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
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AppLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultShell: Story = {
  render: () => <AppShell />,
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: /breadcrumbs/i })).toBeVisible();
    await expect(canvas.getByRole('link', { name: /dashboard/i })).toBeVisible();
    await expect(canvas.getByRole('heading', { name: /panel/i })).toBeVisible();
  },
};

export const AccountSelection: Story = {
  render: () => <AppShell interactiveAccountSelector />,
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /accounts/i }));

    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(body.getByRole('option', { name: /production/i }));

    await expect(canvas.getByRole('button', { name: /production/i })).toBeVisible();
  },
};

export const UserMenuAction: Story = {
  render: () => <AppShell interactiveUserMenu />,
  play: async ({ canvas, canvasElement, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /anand kashyap/i }));

    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(body.getByRole('button', { name: /sign out/i }));

    await expect(canvas.getByText(/latest action: sign out/i)).toBeVisible();
  },
};

type AppShellProps = {
  interactiveAccountSelector?: boolean;
  interactiveUserMenu?: boolean;
};

const AppShell = ({
  interactiveAccountSelector = false,
  interactiveUserMenu = false,
}: AppShellProps) => {
  const [selectedAccount, setSelectedAccount] = React.useState<string | null>(null);
  const [lastAction, setLastAction] = React.useState('Latest action: none');

  return (
    <div style={{ minBlockSize: '48rem' }}>
      <AppLayout>
        <AppLayout.Header>
          <Link unstyled href="#" slot="logo">
            <FortanixLogo subtitle="Armor" />
          </Link>
          <Header slot="actions">
            <UserMenu userName="Anand Kashyap">
              <UserMenu.Action
                itemKey="profile"
                label="View profile"
                onActivate={() => {
                  setLastAction('Latest action: View profile');
                }}
              />
              <UserMenu.Action
                itemKey="sign-out"
                label="Sign out"
                onActivate={() => {
                  setLastAction('Latest action: Sign out');
                }}
              />
            </UserMenu>
            <AccountSelector
              accounts={(
                <>
                  <AccountSelector.Option itemKey="sandbox" label="Sandbox" />
                  <AccountSelector.Option itemKey="production" label="Production" />
                </>
              )}
              selected={interactiveAccountSelector ? selectedAccount : undefined}
              onSelect={interactiveAccountSelector
                ? (itemKey) => {
                    setSelectedAccount(itemKey);
                  }
                : undefined}
            >
              {(account) => account?.label ?? 'Accounts'}
            </AccountSelector>
            <SolutionSelector
              solutions={(
                <>
                  <SolutionSelector.Option itemKey="armor" label="Armor" />
                  <SolutionSelector.Option itemKey="dsm" label="Data Security Manager" />
                </>
              )}
            />
          </Header>
        </AppLayout.Header>
        <AppLayout.Sidebar>
          <Sidebar className="bk-app-layout__sidebar">
            <Nav>
              <Nav.NavItem active icon="dashboard" label="Dashboard" href="#" />
              <Nav.NavItem icon="group" label="Groups" href="#" />
            </Nav>
          </Sidebar>
        </AppLayout.Sidebar>
        <AppLayout.Content>
          <Breadcrumbs>
            <Breadcrumbs.Item href="/" label="Fortanix Armor" />
            <Breadcrumbs.Item href="/" label="Dashboard" active />
          </Breadcrumbs>
          <Panel>
            <Panel.Heading>Panel</Panel.Heading>
            {interactiveUserMenu && <p>{lastAction}</p>}
            {!interactiveUserMenu && <p>Latest action: none</p>}
          </Panel>
        </AppLayout.Content>
        <AppLayout.Footer>
          <span className="version">Version: 1.2.2343</span>
        </AppLayout.Footer>
      </AppLayout>
    </div>
  );
};
