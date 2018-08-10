from django.contrib import admin

from .models import Post, Category


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'get_categories', 'pub_date', 'is_published')


admin.site.register(Post, PostAdmin)
admin.site.register(Category)
