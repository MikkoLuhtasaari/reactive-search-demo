import React from 'react';
import PropTypes from "prop-types"
import {
    MultiDropdownList,
    SingleDropdownRange,
    RangeSlider
} from "@appbaseio/reactivesearch"

const SearchFilters = ({currentTopics, setTopics, visible}) => (
    <div className={`flex column filters-container ${visible ? "" : "hidden"}`}>
        <div className="child m10">
            <MultiDropdownList
                componentId="language"
                dataField="language.raw"
                placeholder="Select Languages"
                title="Language"
                filterLabel="Language"
            />
        </div>
        <div className="child m10">
            <MultiDropdownList
                componentId="topics"
                dataField="topics.raw"
                placeholder="Select topics"
                title="Repo Topics"
                filterLabel="Topics"
                size={1000}
                queryFormat="and"
                defaultSelected={currentTopics}
                onValueChange={setTopics}
            />
        </div>
        <div className="child m10">
            <SingleDropdownRange
                componentId="pushed"
                dataField="pushed"
                placeholder="Repo last active"
                title="Last Active"
                filterLabel="Last Active"
                data={[
                    {start: "now-1M", end: "now", label: "Last 30 days"},
                    {start: 'now-6M', end: 'now', label: 'Last 6 months'},
                    {start: 'now-1y', end: 'now', label: 'Last year'}
                ]}
            />
        </div>
        <div className="child m10">
            <RangeSlider
                componentId="stars"
                title="Repo Stars"
                dataField="stars"
                defaultSelected={{"start": 0, "end":3000}}
                range={{ start:0, end: 5000}}
                showHistogram={true}
                rangeLabels={{
                    start: "0 Stars",
                    end: "5000 Stars"
                }}
                innerClass={{
                    label: "range-label"
                }}
            />
        </div>
        <div className="child m10">
            <RangeSlider
                componentId="forks"
                title="Repo Forks"
                dataField="forks"
                range={{ start: 0, end: 1000 }}
                showHistogram={true}
                rangeLabels={{
                    start: '0 Forks',
                    end: '1000 Forks',
                }}
                innerClass={{
                    label: 'range-label',
                }}
            />
        </div>
    </div>
);

SearchFilters.propTypes = {
    currentTopics: PropTypes.arrayOf(PropTypes.string),
    setTopics: PropTypes.func,
    visible: PropTypes.bool,
};

export default SearchFilters;