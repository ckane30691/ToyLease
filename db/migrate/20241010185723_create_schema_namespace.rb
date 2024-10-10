class CreateSchemaNamespace < ActiveRecord::Migration[5.1]
  def change
      execute "CREATE SCHEMA toylease"
  end
end
