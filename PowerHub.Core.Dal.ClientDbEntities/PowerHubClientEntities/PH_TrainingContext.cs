using Microsoft.EntityFrameworkCore;

namespace PowerHub.Core.Dal.ClientDbEntities.PowerHubClientEntities
{
    public partial class PH_TrainingContext : DbContext
    {
        public virtual DbSet<Tasks> Tasks { get; set; }

        public PH_TrainingContext(DbContextOptions<PH_TrainingContext> options) : base(options) { }

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
