from django.test import TestCase

from .models import Post


class PostModelTest(TestCase):

    def test_create_model_instance(self):
        post = Post.objects.create(title='test', content='test')
        self.assertEqual(post.title, 'test')
