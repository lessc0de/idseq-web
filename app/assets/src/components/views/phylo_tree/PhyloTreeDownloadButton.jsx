import React from "react";
import PropTypes from "prop-types";
import SvgSaver from "svgsaver";

import { logAnalyticsEvent } from "~/api/analytics";

import DownloadButtonDropdown from "../../ui/controls/dropdowns/DownloadButtonDropdown";

class PhyloTreeDownloadButton extends React.Component {
  constructor(props) {
    super(props);

    this.dataOptions = [
      { text: "VCF", value: "vcf" },
      { text: "SNP annotations", value: "snp_annotations" },
    ];
    this.imageOptions = [
      { text: "SVG", value: "svg" },
      { text: "PNG", value: "png" },
    ];
    this.download = this.download.bind(this);
    this.svgSaver = new SvgSaver();
  }

  download(option) {
    if (this.dataOptions.map(o => o.value).includes(option)) {
      location.href = `/phylo_trees/${
        this.props.tree.id
      }/download?output=${option}`;
    } else if (option == "svg") {
      // TODO (gdingle): filename per tree?
      this.svgSaver.asSvg(this.getNode(), "phylo_tree.svg");
    } else if (option == "png") {
      // TODO (gdingle): filename per tree?
      this.svgSaver.asPng(this.getNode(), "phylo_tree.png");
    } else {
      // eslint-disable-next-line no-console
      console.error(`Bad download option: ${option}`);
    }
    logAnalyticsEvent("PhyloTreeDownloadButton_option_clicked", {
      option,
      treeName: this.props.tree.name,
      treeId: this.props.tree.id,
    });
  }

  // TODO (gdingle): should we pass in a reference with React somehow?
  getNode() {
    return document.getElementsByClassName("phylo-tree-vis")[0];
  }

  render() {
    const { tree, ...props } = this.props;
    let readyOptions = this.dataOptions.filter(opt => !!tree[opt.value]);
    readyOptions = readyOptions.concat(this.imageOptions);
    return (
      <DownloadButtonDropdown
        options={readyOptions}
        disabled={readyOptions.length === 0}
        onClick={this.download}
        {...props}
      />
    );
  }
}

PhyloTreeDownloadButton.propTypes = {
  tree: PropTypes.object,
};

export default PhyloTreeDownloadButton;
