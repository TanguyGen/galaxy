export function getGalaxyInstance() {
    return {
        config: {
            allow_user_deletion: false,
            allow_user_creation: true,
            wiki_url: "https://galaxyproject.org/",
            ftp_upload_site: null,
            allow_user_dataset_purge: false,
            allow_library_path_paste: false,
            user_library_import_dir: null,
            terms_url: null,
            library_import_dir: null,
            logo_url: null,
            enable_unique_workflow_defaults: false,
        },
        user: {
            username: "test",
            quota_percent: null,
            total_disk_usage: 61815527,
            nice_total_disk_usage: "59.0 MB",
            email: "test@test.test",
            tags_used: ["test"],
            model_class: "User",
            id: "f2db41e1fa331b3e",
            attributes: {},
            isAdmin: function () {
                return false;
            },
        },
        root: "/",
        emit: {
            debug: function () {},
            error: function (v) {
                window.console.error(v);
            },
        },
    };
}
