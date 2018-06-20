using Microsoft.EntityFrameworkCore;

namespace PowerHub.Core.Dal.CentralDbEntities.PowerHubCentralEntities
{
    public partial class PowerHubCentralContext : DbContext
    {
        public PowerHubCentralContext(DbContextOptions<PowerHubCentralContext> options): base(options) { }

        public virtual DbSet<DashboardConfigurations> DashboardConfigurations { get; set; }
        public virtual DbSet<EmailTemplates> EmailTemplates { get; set; }
        public virtual DbSet<ListItemCaptions> ListItemCaptions { get; set; }
        public virtual DbSet<ListItems> ListItems { get; set; }
        public virtual DbSet<Lists> Lists { get; set; }
        public virtual DbSet<OrganizationMembers> OrganizationMembers { get; set; }
        public virtual DbSet<Organizations> Organizations { get; set; }
        public virtual DbSet<Packages> Packages { get; set; }
        public virtual DbSet<ProjectPortfolio> ProjectPortfolio { get; set; }
        public virtual DbSet<Projects> Projects { get; set; }
        public virtual DbSet<Tasks> Tasks { get; set; }
        public virtual DbSet<UserProjects> UserProjects { get; set; }
        public virtual DbSet<Users> Users { get; set; }
        public virtual DbSet<UserSessions> UserSessions { get; set; }
        public virtual DbSet<WatchLinks> WatchLinks { get; set; }
        public virtual DbSet<WidgetSizes> WidgetSizes { get; set; }
        public virtual DbSet<WidgetsLibrary> WidgetsLibrary { get; set; }

        // Unable to generate entity type for table 'dbo.ClientDatabases'. Please see the warning messages.


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<DashboardConfigurations>(entity =>
            {
                entity.Property(e => e.Dashboardconfigurationsid)
                    .HasColumnName("dashboardconfigurationsid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Containerid).HasColumnName("containerid");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Layout)
                    .IsRequired()
                    .HasColumnName("layout");

                entity.Property(e => e.Level)
                    .IsRequired()
                    .HasColumnName("level")
                    .HasMaxLength(30);

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");
            });

            modelBuilder.Entity<EmailTemplates>(entity =>
            {
                entity.HasKey(e => e.Emailtemplateid);

                entity.Property(e => e.Emailtemplateid)
                    .HasColumnName("emailtemplateid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Emailtemplatekey)
                    .IsRequired()
                    .HasColumnName("emailtemplatekey")
                    .HasMaxLength(50);

                entity.Property(e => e.Locale)
                    .IsRequired()
                    .HasColumnName("locale")
                    .HasMaxLength(50)
                    .HasDefaultValueSql("('en-ca')");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Templatehtml)
                    .IsRequired()
                    .HasColumnName("templatehtml");
            });

            modelBuilder.Entity<ListItemCaptions>(entity =>
            {
                entity.HasKey(e => e.Listitemcaptionid);

                entity.Property(e => e.Listitemcaptionid)
                    .HasColumnName("listitemcaptionid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Caption)
                    .HasColumnName("caption")
                    .HasMaxLength(500);

                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasColumnName("language")
                    .HasMaxLength(50);

                entity.Property(e => e.Listitemid).HasColumnName("listitemid");

                entity.HasOne(d => d.Listitem)
                    .WithMany(p => p.ListItemCaptions)
                    .HasForeignKey(d => d.Listitemid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ListItemCaptions_ListItems");
            });

            modelBuilder.Entity<ListItems>(entity =>
            {
                entity.HasKey(e => e.Listitemid);

                entity.Property(e => e.Listitemid)
                    .HasColumnName("listitemid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Effectivedate)
                    .HasColumnName("effectivedate")
                    .HasColumnType("date");

                entity.Property(e => e.Expirydate)
                    .HasColumnName("expirydate")
                    .HasColumnType("date")
                    .HasDefaultValueSql("('9999-12-31')");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Itemkey)
                    .IsRequired()
                    .HasColumnName("itemkey")
                    .HasMaxLength(100);

                entity.Property(e => e.Listid).HasColumnName("listid");

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Ordinal).HasColumnName("ordinal");

                entity.HasOne(d => d.List)
                    .WithMany(p => p.ListItems)
                    .HasForeignKey(d => d.Listid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ListItems_Lists");
            });

            modelBuilder.Entity<Lists>(entity =>
            {
                entity.HasKey(e => e.Listid);

                entity.Property(e => e.Listid)
                    .HasColumnName("listid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Containerid).HasColumnName("containerid");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(2000);

                entity.Property(e => e.Isactive).HasColumnName("isactive");

                entity.Property(e => e.Isprivate).HasColumnName("isprivate");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Listkey)
                    .IsRequired()
                    .HasColumnName("listkey")
                    .HasMaxLength(50);

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(150);

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Type).HasColumnName("type");

                entity.HasOne(d => d.List)
                    .WithOne(p => p.InverseList)
                    .HasForeignKey<Lists>(d => d.Listid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Lists_Lists");
            });

            modelBuilder.Entity<OrganizationMembers>(entity =>
            {
                entity.HasKey(e => e.Memberid);

                entity.HasIndex(e => new { e.Organizationid, e.Userid })
                    .HasName("IX_OrganizationMembers")
                    .IsUnique();

                entity.Property(e => e.Memberid)
                    .HasColumnName("memberid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Isorgadmin).HasColumnName("isorgadmin");

                entity.Property(e => e.Ispowerhubadmin).HasColumnName("ispowerhubadmin");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Permissions)
                    .IsRequired()
                    .HasColumnName("permissions")
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Securitytags)
                    .IsRequired()
                    .HasColumnName("securitytags")
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Tagstoken)
                    .HasColumnName("tagstoken")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.OrganizationMembers)
                    .HasForeignKey(d => d.Organizationid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrganizationMembers_Organizations");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.OrganizationMembers)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_OrganizationMembers_Users");
            });

            modelBuilder.Entity<Organizations>(entity =>
            {
                entity.HasKey(e => e.Organizationid);

                entity.Property(e => e.Organizationid)
                    .HasColumnName("organizationid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Clientdatabasekey)
                    .IsRequired()
                    .HasColumnName("clientdatabasekey")
                    .HasMaxLength(50);

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Isprivate).HasColumnName("isprivate");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Keycontactid).HasColumnName("keycontactid");

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.Organizationkey)
                    .HasColumnName("organizationkey")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Packages>(entity =>
            {
                entity.HasKey(e => e.Galleryid);

                entity.Property(e => e.Galleryid)
                    .HasColumnName("galleryid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Allowunpackage).HasColumnName("allowunpackage");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(2000);

                entity.Property(e => e.Items).HasColumnName("items");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(150);

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Packageid).HasColumnName("packageid");

                entity.Property(e => e.Packageschemaversion)
                    .HasColumnName("packageschemaversion")
                    .HasMaxLength(32)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('')");

                entity.Property(e => e.Sourceorganizationid).HasColumnName("sourceorganizationid");

                entity.Property(e => e.Storagekey)
                    .IsRequired()
                    .HasColumnName("storagekey")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<ProjectPortfolio>(entity =>
            {
                entity.Property(e => e.Projectportfolioid)
                    .HasColumnName("projectportfolioid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Portfolioid).HasColumnName("portfolioid");

                entity.Property(e => e.Projectid).HasColumnName("projectid");

                entity.HasOne(d => d.Portfolio)
                    .WithMany(p => p.ProjectPortfolioPortfolio)
                    .HasForeignKey(d => d.Portfolioid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProjectPortfolio_Portfolio");

                entity.HasOne(d => d.Project)
                    .WithMany(p => p.ProjectPortfolioProject)
                    .HasForeignKey(d => d.Projectid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProjectPortfolio_Project");
            });

            modelBuilder.Entity<Projects>(entity =>
            {
                entity.HasKey(e => e.Projectid);

                entity.Property(e => e.Projectid)
                    .HasColumnName("projectid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Addressline)
                    .HasColumnName("addressline")
                    .HasMaxLength(200);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(50);

                entity.Property(e => e.Countryid).HasColumnName("countryid");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(2000);

                entity.Property(e => e.Isportfolio).HasColumnName("isportfolio");

                entity.Property(e => e.Isprivate).HasColumnName("isprivate");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Isworkspace).HasColumnName("isworkspace");

                entity.Property(e => e.Keycontactid).HasColumnName("keycontactid");

                entity.Property(e => e.Latitude).HasColumnName("latitude");

                entity.Property(e => e.Longitude).HasColumnName("longitude");

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(64);

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Postalcode)
                    .HasColumnName("postalcode")
                    .HasMaxLength(10);

                entity.Property(e => e.Projecticonkey)
                    .HasColumnName("projecticonkey")
                    .HasMaxLength(200);

                entity.Property(e => e.Projectkey)
                    .HasColumnName("projectkey")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.Provincestateid).HasColumnName("provincestateid");

                entity.Property(e => e.Startdate)
                    .HasColumnName("startdate")
                    .HasColumnType("date");

                entity.Property(e => e.Tags).HasColumnName("tags");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.Organizationid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Project_Organizations");
            });

            modelBuilder.Entity<Tasks>(entity =>
            {
                entity.HasKey(e => e.Taskid);

                entity.Property(e => e.Taskid)
                    .HasColumnName("taskid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Assignedto).HasColumnName("assignedto");

                entity.Property(e => e.Containerid).HasColumnName("containerid");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(4000);

                entity.Property(e => e.Duration).HasColumnName("duration");

                entity.Property(e => e.Enddate)
                    .HasColumnName("enddate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Isbusinessday).HasColumnName("isbusinessday");

                entity.Property(e => e.Iscompleted).HasColumnName("iscompleted");

                entity.Property(e => e.Isnew).HasColumnName("isnew");

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(500);

                entity.Property(e => e.Notificationdays).HasColumnName("notificationdays");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Parentid).HasColumnName("parentid");

                entity.Property(e => e.Recurrenceid).HasColumnName("recurrenceid");

                entity.Property(e => e.Startdate)
                    .HasColumnName("startdate")
                    .HasColumnType("datetime");

                entity.Property(e => e.Tagstoken)
                    .HasColumnName("tagstoken")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Taskprioritykey)
                    .HasColumnName("taskprioritykey")
                    .HasMaxLength(50);

                entity.Property(e => e.Taskstatuskey)
                    .HasColumnName("taskstatuskey")
                    .HasMaxLength(50);

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.Tasks)
                    .HasForeignKey(d => d.Organizationid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Task_Organizations");
            });

            modelBuilder.Entity<UserProjects>(entity =>
            {
                entity.HasKey(e => e.Userprojectid);

                entity.Property(e => e.Userprojectid)
                    .HasColumnName("userprojectid")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.Isassignedtomember)
                    .HasColumnName("isassignedtomember")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Isfavourite).HasColumnName("isfavourite");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Projectid).HasColumnName("projectid");

                entity.Property(e => e.Userid).HasColumnName("userid");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.Userid);

                entity.Property(e => e.Userid)
                    .HasColumnName("userid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.Firstname)
                    .HasColumnName("firstname")
                    .HasMaxLength(50);

                entity.Property(e => e.Isactive).HasColumnName("isactive");

                entity.Property(e => e.Ispowerhubadmin).HasColumnName("ispowerhubadmin");

                entity.Property(e => e.Isprivate).HasColumnName("isprivate");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Languagepreferenceid)
                    .HasColumnName("languagepreferenceid")
                    .HasDefaultValueSql("('D04540A8-4010-481D-812D-0B4DE31393DD')");

                entity.Property(e => e.Languagepreferencekey)
                    .IsRequired()
                    .HasColumnName("languagepreferencekey")
                    .HasMaxLength(100)
                    .HasDefaultValueSql("('en-ca')");

                entity.Property(e => e.Lastname)
                    .HasColumnName("lastname")
                    .HasMaxLength(50);

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(256);

                entity.Property(e => e.Resetpasswordhash)
                    .HasColumnName("resetpasswordhash")
                    .HasMaxLength(256);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((1))");
            });

            modelBuilder.Entity<UserSessions>(entity =>
            {
                entity.HasKey(e => e.Usersessionid);

                entity.Property(e => e.Usersessionid)
                    .HasColumnName("usersessionid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Isexpired).HasColumnName("isexpired");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserSessions)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserSessions_Users");
            });

            modelBuilder.Entity<WatchLinks>(entity =>
            {
                entity.HasKey(e => e.Watchlinkid);

                entity.HasIndex(e => new { e.Userid, e.Watchedobjectid })
                    .HasName("UX_WatchLinks")
                    .IsUnique();

                entity.Property(e => e.Watchlinkid)
                    .HasColumnName("watchlinkid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Watchedobjectid).HasColumnName("watchedobjectid");

                entity.HasOne(d => d.Organization)
                    .WithMany(p => p.WatchLinks)
                    .HasForeignKey(d => d.Organizationid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WatchLinks_Organizations");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.WatchLinks)
                    .HasForeignKey(d => d.Userid)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_WatchLinks_Users");
            });

            modelBuilder.Entity<WidgetSizes>(entity =>
            {
                entity.HasKey(e => e.Widgetsizeid);

                entity.Property(e => e.Widgetsizeid)
                    .HasColumnName("widgetsizeid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Defaultsize)
                    .IsRequired()
                    .HasColumnName("defaultsize")
                    .HasColumnType("nchar(10)");

                entity.Property(e => e.Sizes).HasColumnName("sizes");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasColumnName("type")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WidgetsLibrary>(entity =>
            {
                entity.HasKey(e => e.Widgetid);

                entity.Property(e => e.Widgetid)
                    .HasColumnName("widgetid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Configuration).HasColumnName("configuration");

                entity.Property(e => e.Createdby).HasColumnName("createdby");

                entity.Property(e => e.Datetimecreated)
                    .HasColumnName("datetimecreated")
                    .HasColumnType("datetime");

                entity.Property(e => e.Datetimemodified)
                    .HasColumnName("datetimemodified")
                    .HasColumnType("datetime");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Groups)
                    .IsRequired()
                    .HasColumnName("groups")
                    .HasMaxLength(500);

                entity.Property(e => e.Isprivate).HasColumnName("isprivate");

                entity.Property(e => e.Issystemobject).HasColumnName("issystemobject");

                entity.Property(e => e.Levels)
                    .HasColumnName("levels")
                    .HasMaxLength(100);

                entity.Property(e => e.Modifiedby).HasColumnName("modifiedby");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(100);

                entity.Property(e => e.Organizationid).HasColumnName("organizationid");

                entity.Property(e => e.Packageid).HasColumnName("packageid");

                entity.Property(e => e.Resultsettype)
                    .IsRequired()
                    .HasColumnName("resultsettype")
                    .HasMaxLength(100);

                entity.Property(e => e.Thumbnail)
                    .HasColumnName("thumbnail")
                    .HasMaxLength(150);
            });
        }
    }
}
