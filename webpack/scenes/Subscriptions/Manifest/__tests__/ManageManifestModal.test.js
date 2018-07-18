import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ManageManifestModal from '../ManageManifestModal';
import { manifestHistorySuccessState } from './manifest.fixtures';

jest.mock('../../../../move_to_foreman/foreman_toast_notifications');

describe('manage manifest modal', () => {
  const noop = () => {};
  const organization = { id: 1, redhat_repository_url: 'https://redhat.com' };

  it('should render', async () => {
    const page = shallow(<ManageManifestModal
      uploadManifest={noop}
      refreshManifest={noop}
      deleteManifest={noop}
      loadManifestHistory={noop}
      organization={organization}
      loadOrganization={noop}
      saveOrganization={noop}
      runMonitorManifestTasksManually={noop}
      manifestHistory={manifestHistorySuccessState}
      taskInProgress={false}
      showModal
    />);
    expect(toJson(page)).toMatchSnapshot();
  });
});
