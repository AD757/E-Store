import React from 'react';
import { connect } from 'react-redux';

import {MenuItem} from '..';
import {RootState, selectDirectorySections} from '../../redux';
import {SectionModel} from '../../types';

import {DirectoryMenuContainer} from './Directory.styles';

interface StateProps {
  readonly sections: SectionModel[]
}

type Props = StateProps

export const componentDirectory = React.memo(({sections}: Props) => {
  return (
    <DirectoryMenuContainer>
      {sections.map((item, i) => <MenuItem key={`menuitem_${item.id || i}`} data={item}/>)}
    </DirectoryMenuContainer>
  );
});

const mapStateToProps = (state: RootState) => ({
  sections: selectDirectorySections(state)
});

export const Directory = connect(mapStateToProps)(componentDirectory);
