import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.examcenter.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.examcenter.fields.name'),
  },
  {
    name: 'state',
    label: i18n('entities.examcenter.fields.state'),
  },
  {
    name: 'region',
    label: i18n('entities.examcenter.fields.region'),
  },
  {
    name: 'district',
    label: i18n('entities.examcenter.fields.district'),
  },
  {
    name: 'startNumber',
    label: i18n('entities.examcenter.fields.startNumber'),
  },
  {
    name: 'examYear',
    label: i18n('entities.examcenter.fields.examYear'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.examcenter.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.examcenter.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
