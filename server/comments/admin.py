from django.contrib import admin

from .models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ('post', 'author', 'is_moderated')


admin.site.register(Comment, CommentAdmin)
