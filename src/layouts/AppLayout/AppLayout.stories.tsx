import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';

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

const LayoutChrome = ({
  panelChildren,
  headerActions,
}: {
  panelChildren?: React.ReactNode;
  headerActions: React.ReactNode;
}) => (
  <AppLayout>
    <AppLayout.Header>
      <Link unstyled href="#" slot="logo">
        <FortanixLogo subtitle="Armor" />
      </Link>
      <Header slot="actions">{headerActions}</Header>
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
        {panelChildren}
      </Panel>
    </AppLayout.Content>
    <AppLayout.Footer>
      <span className="version">Version: 1.2.2343</span>
    </AppLayout.Footer>
  </AppLayout>
);

const AccountSelectorStory = () => {
  const [selectedAccount, setSelectedAccount] = React.useState<string | null>(null);

  return (
    <LayoutChrome
      headerActions={
        <>
          <UserMenu userName="Anand Kashyap" />
          <AccountSelector
            className="select-action"
            accounts={
              <>
                <AccountSelector.Header itemKey="accounts-heading" label="Accounts">
                  Accounts
                </AccountSelector.Header>
                <AccountSelector.Option itemKey="armor" label="Armor">
                  Armor
                </AccountSelector.Option>
                <AccountSelector.Option itemKey="dsm" label="Data Security Manager">
                  Data Security Manager
                </AccountSelector.Option>
              </>
            }
            selected={selectedAccount}
            onSelect={(itemKey) => {
              setSelectedAccount(itemKey);
            }}
          >
            {(account) => account?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector className="select-action" solutions={null} />
        </>
      }
      panelChildren={<p>Selected account: {selectedAccount ?? 'None'}</p>}
    />
  );
};

const UserMenuStory = () => {
  const [lastAction, setLastAction] = React.useState('No action selected');

  return (
    <LayoutChrome
      headerActions={
        <>
          <UserMenu userName="Anand Kashyap">
            <UserMenu.Action
              itemKey="profile"
              label="Profile settings"
              onActivate={() => {
                setLastAction('Profile settings opened');
              }}
            />
            <UserMenu.Action
              itemKey="sign-out"
              label="Sign out"
              onActivate={() => {
                setLastAction('Signed out');
              }}
            />
          </UserMenu>
          <AccountSelector className="select-action" accounts={null}>
            {(account) => account?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector className="select-action" solutions={null} />
        </>
      }
      panelChildren={<p>{lastAction}</p>}
    />
  );
};

const SolutionSelectorStory = () => {
  const [selectedSolution, setSelectedSolution] = React.useState<string | null>(null);

  return (
    <LayoutChrome
      headerActions={
        <>
          <UserMenu userName="Anand Kashyap" />
          <AccountSelector className="select-action" accounts={null}>
            {(account) => account?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector
            className="select-action"
            solutions={
              <>
                <SolutionSelector.Option itemKey="iam" label="Identity and Access Management">
                  Identity and Access Management
                </SolutionSelector.Option>
                <SolutionSelector.Option itemKey="ki" label="Key Insight">
                  Key Insight
                </SolutionSelector.Option>
              </>
            }
            selected={selectedSolution}
            onSelect={(itemKey) => {
              setSelectedSolution(itemKey);
            }}
          >
            {(solution) => solution?.label ?? 'Solutions'}
          </SolutionSelector>
        </>
      }
      panelChildren={<p>Selected solution: {selectedSolution ?? 'None'}</p>}
    />
  );
};

export const DashboardShell: Story = {
  render: () => (
    <LayoutChrome
      headerActions={
        <>
          <UserMenu userName="Anand Kashyap" />
          <AccountSelector className="select-action" accounts={null}>
            {(account) => account?.label ?? 'Accounts'}
          </AccountSelector>
          <SolutionSelector className="select-action" solutions={null} />
        </>
      }
      panelChildren={<p>Summary content for the main dashboard panel.</p>}
    />
  ),
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('navigation', { name: 'Breadcrumbs' })).toBeVisible();
    await expect(canvas.getByRole('link', { name: 'Fortanix Armor' })).toBeVisible();
    await expect(canvas.getByText('Summary content for the main dashboard panel.')).toBeVisible();
  },
};

export const AccountSelection: Story = {
  render: () => <AccountSelectorStory />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Accounts' }));
    await userEvent.click(canvas.getByRole('option', { name: 'Data Security Manager' }));

    await waitFor(() => {
      expect(canvas.getByRole('button', { name: 'dsm' })).toBeVisible();
    });
    await waitFor(() => {
      expect(canvas.queryByRole('option', { name: 'Data Security Manager' })).toBeNull();
    });

    await expect(canvas.getByText('Selected account: dsm')).toBeVisible();
  },
};

export const UserAndSolutionMenus: Story = {
  render: () => <UserMenuStory />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: /anand kashyap/i }));
    await userEvent.click(canvas.getByRole('button', { name: 'Profile settings' }));

    await expect(canvas.getByText('Profile settings opened')).toBeVisible();
  },
};

export const SolutionSelection: Story = {
  render: () => <SolutionSelectorStory />,
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Solutions' }));
    await userEvent.click(canvas.getByRole('option', { name: 'Key Insight' }));

    await waitFor(() => {
      expect(canvas.getByRole('button', { name: 'ki' })).toBeVisible();
    });
    await waitFor(() => {
      expect(canvas.queryByRole('option', { name: 'Key Insight' })).toBeNull();
    });

    await expect(canvas.getByText('Selected solution: ki')).toBeVisible();
  },
};
