import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/advance/importer/advanceImporterActions';
import fields from 'src/modules/advance/importer/advanceImporterFields';
import selectors from 'src/modules/advance/importer/advanceImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AdvanceImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.advance.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.advance.menu'), '/advance'],
          [i18n('entities.advance.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.advance.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AdvanceImportPage;
