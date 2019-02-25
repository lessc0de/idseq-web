import React from "react";
import PropTypes from "prop-types";
import { Table } from "~/components/visualizations/table";
import { merge, pick } from "lodash";
import GlobeIcon from "~ui/icons/GlobeIcon";
import LockIcon from "~ui/icons/LockIcon";
import moment from "moment";
import cs from "./projects_view.scss";
import cx from "classnames";

class ProjectsView extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        dataKey: "public_access",
        width: 30,
        label: "",
        cellRenderer: this.renderAccess
      },
      {
        dataKey: "details",
        label: "Project",
        flexGrow: 1,
        className: cs.detailsCell,
        cellRenderer: this.renderProjectDetails,
        headerClassName: cs.detailsHeader,
        sortFunction: p => p.name
      },
      {
        dataKey: "hosts",
        width: 200,
        disableSort: true,
        cellRenderer: this.renderList
      },
      {
        dataKey: "tissues",
        width: 200,
        disableSort: true,
        cellRenderer: this.renderList
      },
      { dataKey: "number_of_samples", width: 140, label: "No. Of Samples" }
    ];
  }

  renderAccess = ({ cellData: publicAccess }) => {
    return (
      <div>
        {publicAccess ? (
          <GlobeIcon className={cx(cs.icon, cs.iconGlobe)} />
        ) : (
          <LockIcon className={cx(cs.icon, cs.iconLock)} />
        )}
      </div>
    );
  };

  renderProjectDetails = ({ cellData: project }) => {
    return (
      <div className={cs.project}>
        <div className={cs.projectName}>{project.name}</div>
        <div className={cs.projectDescription}>
          {project.description || "No description (DELETE THIS)"}
        </div>
        <div className={cs.projectDetails}>
          <span className={cs.projectCreationDate}>
            {moment(project.created_at).fromNow()}
          </span>|
          <span className={cs.projectOwner}>
            {project.owner || "No owner (DELETE THIS)"}
          </span>
        </div>
      </div>
    );
  };

  // TODO: move generic renderers to table component
  renderList = ({ cellData: list }) => {
    return list && list.length > 0 ? list.join(", ") : "N/A";
  };

  render() {
    const { projects } = this.props;

    let data = projects.map(project => {
      return merge(
        {
          details: pick(project, ["name", "description", "created_at", "owner"])
        },
        pick(project, [
          "public_access",
          "hosts",
          "tissues",
          "number_of_samples"
        ])
      );
    });

    return (
      <Table
        sortable
        data={data}
        columns={this.columns}
        defaultRowHeight={120}
        sortBy={"details"}
      />
    );
  }
}

ProjectsView.defaultProps = {
  projects: []
};

ProjectsView.propTypes = {
  projects: PropTypes.array
};

export default ProjectsView;
