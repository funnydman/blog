from django.test import TestCase

from .models import Post


class PostModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Post.objects.create(title='test title', content='test content')

    def test_create_model_instance(self):
        post = Post.objects.get(title='test title')
        self.assertEqual(post.content, 'test content')
