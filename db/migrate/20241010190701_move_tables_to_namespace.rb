class MoveTablesToNamespace < ActiveRecord::Migration[5.1]
  def up
    execute "ALTER TABLE leasings SET SCHEMA toylease"
    execute "ALTER TABLE toys SET SCHEMA toylease"
    execute "ALTER TABLE users SET SCHEMA toylease"
  end

  def down
    execute "ALTER TABLE leasings SET SCHEMA public"
    execute "ALTER TABLE toys SET SCHEMA public"
    execute "ALTER TABLE users SET SCHEMA public"
  end
end
