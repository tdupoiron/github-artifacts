import prettyBytes from '../../node_modules/pretty-bytes/index.js';

$('.table').bootstrapTable({
    url: 'assets/data/artifacts.json',
    pagination: true,
    paginationVAlign: 'both',
    pageSize: 10,
    search: true,
    sorting: true,
    sortName: 'size',
    sortOrder: 'desc',
    columns: [
    {
        field: 'repoOwnerLogin',
        title: 'Owner',
        sortable: true,
        formatter: function(value, row, index) {
            return '<a target="_blank" href="' + row.repoOwnerUrl + '">' + value + '</a> <span style="font-style: italic;">(' + row.repoOwnerType + ')</span>';  
        }
    },
        {
        field: 'repoName',
        title: 'Repository',
        sortable: true,
        formatter: function (value, row, index) {
            return '<a target="_blank" href="' + row.repoUrl + '">' + value + '</a> <span style="font-style: italic;">(' + row.repoVisibility + ')</span>';
        }
    }, {
        field: 'artifactName',
        title: 'Artifact',
        sortable: true,
        formatter: function (value, row, index) {
            return '<a target="_blank" href="' + row.artifactDownloadUrl + '">' + value + '</a>';
        }
    }, {
        field: 'workflowRunId',
        title: 'Workflow Run',
        sortable: true,
        formatter: function (value, row, index) {
            return '<a target="_blank" href="' + row.workflowRunUrl + '">' + value + '</a>';
        }
    }, {
        field: 'size',
        title: 'Size',
        sortable: true,
        formatter: function (value, row, index) {
            return prettyBytes(value);
        }
    }, {
        field: 'created_at',
        title: 'Created',
        sortable: true,
        formatter: function (value, row, index) {
            return new Date(value).toLocaleString();
        }
    }, {
        field: 'expires_at',
        title: 'Expires',
        sortable: true,
        formatter: function (value, row, index) {
            return new Date(value).toLocaleString();
        }
    }]
});