import React, { Component } from 'react';
import * as d3 from 'd3';
import { layouts } from './Layout';

import { Responsive, WidthProvider } from 'react-grid-layout';
const ResponsiveGridLayout = WidthProvider(Responsive);

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLayoutChange = (layout, layouts) => {};

  onBreakpointChange = (breakpoint, cols) => {};

  render() {
    return (
      <React.Fragment>
        <ResponsiveGridLayout
          className='layout center'
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 }}
          //   rowHeight={this.decideBoxSize()}
          //   onBreakpointChange={this.onBreakpointChange}
          //   onLayoutChange={(layout, layouts) =>
          //     this.onLayoutChange(layout, layouts)
          //   }
          compactType='horizontal'
        >
          <div key='1' className='card overflow' style='width: 18rem;'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='card-link'>
                Card link
              </a>
              <a href='#' className='card-link'>
                Another link
              </a>
            </div>
          </div>
          <div key='2' className='card overflow' style='width: 18rem;'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='card-link'>
                Card link
              </a>
              <a href='#' className='card-link'>
                Another link
              </a>
            </div>
          </div>
          <div key='3' className='card overflow' style='width: 18rem;'>
            <div className='card-body'>
              <h5 className='card-title'>Card title</h5>
              <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
              <p className='card-text'>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href='#' className='card-link'>
                Card link
              </a>
              <a href='#' className='card-link'>
                Another link
              </a>
            </div>
          </div>
        </ResponsiveGridLayout>
      </React.Fragment>
    );
  }
}

export default AdminPanel;
