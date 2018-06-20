using Microsoft.EntityFrameworkCore;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class PH_TrainingContext : DbContext
    {
        public virtual DbSet<Tasks> Tasks { get; set; }

        public PH_TrainingContext(DbContextOptions<PH_TrainingContext> options) : base(options) { }


//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
//                optionsBuilder.UseSqlServer(@"Server=tcp:qh5a9hun22.database.windows.net,1433;Initial Catalog=PH_Training;Persist Security Info=False;User ID=DCM3478;Password=Chapi1982;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tasks>(entity =>
            {
                entity.HasKey(e => e.Taskid);

                entity.Property(e => e.Taskid)
                    .HasColumnName("taskid")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Key)
                    .IsRequired()
                    .HasColumnName("key")
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(250);
            });
        }
    }
}
