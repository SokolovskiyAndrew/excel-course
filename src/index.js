import './scss/index.scss';
import './module';
import { Excel, Header, Toolbar, Formula, Table } from '@/components/index.import';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table]
});

excel.render();
